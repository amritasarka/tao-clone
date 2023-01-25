import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {

    const [search, setSearch] = useState('')

    const displaySearch = ()=>{
        const bar = document.getElementById('bar');
        if(bar.style.display === 'block'){
            bar.style.display = 'none';
        }
        else{
            bar.style.display = 'block';
        }
    }

  return (
    <Navbar>
        <Logo>
            {/* <img src="" alt="" /> */}
            <h1>TAO</h1>
        </Logo>
        <Menu>
            <Lang>
                <CustomLink id='en'>
                    <img src="/images/en.svg" alt="" />
                    <span>EN</span>
                </CustomLink>
                <CustomLink id='fr'>
                    <img src="/images/fr.svg" alt="" />
                    <span>FR</span>
                </CustomLink>
                <CustomLink id='es'>
                    <img src="/images/es.svg" alt="" />
                    <span>ES</span>
                </CustomLink>
                <CustomLink id='ja'>
                    <img src="/images/jp.svg" alt="" />
                    <span>JA</span>
                </CustomLink>
                <Search>
                    <Bar id='bar'>
                        <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)} value={search}/>
                    </Bar>
                    <Icon onClick={displaySearch}>
                        <SearchOutlinedIcon/>
                    </Icon>
                </Search>
            </Lang>
            <Links>
                <div>
                    <Link to='/'>
                        Platfrom
                    </Link>
                </div>
                <div>
                    <Link to='/products'>
                        Products
                    </Link>
                </div>
                <div>
                    <Link to='/knowledge-base'>
                        Knowledge-Base
                    </Link>
                </div>
                <div>
                    <Link to='/resources'>
                        Resources
                    </Link>
                </div>      
            </Links>
        </Menu>
    </Navbar>
  )
}

export default Header

const Navbar  = styled.div`
    margin:0;
    padding: 0 150px;
    position: fixed;
    background-color: rgba(0,0,0,0);
    color: white;
    height: 100px;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    flex: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`

const Lang = styled.div`
    display: flex;
    // justify-content: flex-end;
    align-items: center;
`

const Links = styled.div`
    display: flex;
    align-items: center;

`

const CustomLink = styled(Link)`
    text-decoration: none;
    color: white;
    gap: 5px;
    margin: 0 3px;
    font-size: 0.9rem;
    display: flex;
    margin: 0 10px;
    img{
        height: 15px;
        width: 15px;
    }
`

const Search = styled.div`
    display: flex;
    gap: 10px;
`
const Bar = styled.form`

    input{
        height: 30px;
        width: 250px;
    }
    display: none;
`

const Icon = styled.div`

    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

`