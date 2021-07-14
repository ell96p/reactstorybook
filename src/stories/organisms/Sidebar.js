import React from 'react';
import styled from 'styled-components';
import  { ReactComponent as IconIceCream }   from '../../assets/ice-cream.svg'
import IconButton from "../atoms/Button/IconButton";
import theme from "../../theme/MainTheme";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;

const SidebarContainer = styled.div`
  top: 0;
  width: 200px;
  position: fixed;
  height: 100%;
  background-color: ${({activeColor, theme}) => {
        if(activeColor === 'primary') {return theme.color.primary
        }if (activeColor==='secondary'){return theme.color.secondary
        }
    return theme.color.tertiary;
}
};
  `;

const Sidebar = ({pageType}) => (
    <SidebarContainer activeColor={pageType}>
        <NavigationLink to='/'>
            <IconButton label={""} icon={<IconIceCream />}/>
        </NavigationLink>
        <NavigationLink to='/first'>
        <IconButton label={"first"} icon={<IconIceCream />}/>
        </NavigationLink>
        <NavigationLink to='/second'>
        <IconButton label={"second"} icon={<IconIceCream />}/>
        </NavigationLink>
    </SidebarContainer>
)

Sidebar.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
}

Sidebar.defaultProps = {
    color: theme.color.primary,
}
export default Sidebar;