import React from 'react';
import './SelectMenu.css'
const SelectMenu = ({selectedMenu}: {selectedMenu:(data:any)=>void}) => {

    const menus = ['안전교육', '법령시행', '중대재해처벌법', '온열질환', '작업공구', '위험표지판', '외국인근로자', '안전보건 포스터']
    const [selectMenu, setSelectMenu] = React.useState<number>(-1)
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
    return (
        <div className={'select_menu'}>
            <div onClick={()=>setMenuOpen(!menuOpen)}>
                {'메뉴'}
            </div>
            {menuOpen &&
                menus.map((v,i)=>(
                    <div onClick={()=> {
                        if(selectMenu === i){
                            setSelectMenu(-1)
                        }
                        else{
                            setSelectMenu(i)
                        }
                    }} className={'items'} key={v}>
                        {v}
                        {selectMenu === i &&
                            <div>
                                <div onClick={()=>selectedMenu({menu: i, vertical: false})} className={'orientation'}>{'가로형'}</div>
                                <div onClick={()=>selectedMenu({menu: i, vertical: true})} className={'orientation'}>{'세로형'}</div>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default SelectMenu;