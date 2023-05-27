
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import './Sidebar.css';

// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';

function Sidebar(props) {
  return (
    <div className='sidebar'> 
     <Navigation
              // you can use your own router's api to get pathname
              activeItemId="/management/members"
              onSelect={({itemId}) => {
                // maybe push to the route
              }}
              items={[
                {
                  title: `${props.customerData[0].cname}`,
                  itemId: '/management',
                  // elemBefore: () => <Icon name="users" />,
                  subNav: [
                    {
                      title: `${props.customerData[0].cemail}`,
                      itemId: '/management/projects',
                    },
                    {
                      title: `${props.customerData[0].caddress}`,
                      itemId: '/management/members',
                    },
                  ],
                },
                {
                  title: 'Sort by',
                  itemId: '/another',
                  subNav: [
                    {
                      title: 'open',
                      itemId: '/management/teams',
                    },
                    {
                      title: 'closed',
                      itemId: '/management/teams',
                    }
                  ],
                },
              ]}
            /> 
    </div> 
    
  );
}
export default Sidebar;
