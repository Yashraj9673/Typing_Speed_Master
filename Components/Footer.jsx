import React, { useContext } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Select from 'react-select';
import { themeOptions } from '../Utils/themeOptions';
import { ThemeContext } from '../Context/ThemeContext';
import { Link } from '@mui/material';


const Footer = () => {

    const {setTheme} = useContext(ThemeContext);

    const handleThemeChange = (e)=>{
        console.log(e.value);
        setTheme(e.value);
        localStorage.setItem('theme', JSON.stringify(e.value));
    }

  return (
    <div className="footer">
        <div className="links">
            <Link className='space' href="https://github.com/Yashraj9673" underline="none" color="inherit">
            <GitHubIcon/>
            
            </Link>
            
            <Link className='space' href="https://www.linkedin.com/in/Yashraj9673/" underline="none" color="inherit">
           
            <LinkedInIcon/>
            </Link>
            
        </div>
        <div className="themes">
            {/* select button will go */}
            <Select 
                onChange={handleThemeChange}
                options={themeOptions}
                menuPlacement='top'
                defaultValue={{value: themeOptions, label: themeOptions.label}}
                styles={{
                  control: styles => ({...styles, backgroundColor: themeOptions.background}),
                  menu: styles => ({...styles,backgroundColor:themeOptions.background}),
                  option: (styles,{isFocused}) =>{
                    return{
                      ...styles,
                      backgroundColor:(!isFocused) ? themeOptions.background : themeOptions.textColor,
                      color: (!isFocused) ? themeOptions.textColor : themeOptions.background,
                      cursor: 'pointer'
                    }
                  }
                }}/> 
               </div>
    </div>
  )
}

export default Footer