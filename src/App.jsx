// // // import * as React from 'react';
// // // import Joker from './Joker';
// // // import Box from '@mui/material/Box';
// // // import Tabs from '@mui/material/Tabs';
// // // import Tab from '@mui/material/Tab';
// // // import WeatherAPP from './WeatherAPP';
// // // import axios from 'axios';

// // // const App = () => {

  
// // // // function samePageLinkNavigation(
// // // //   event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
// // // // ) {
// // // //   if (
// // // //     event.defaultPrevented ||
// // // //     event.button !== 0 || // ignore everything but left-click
// // // //     event.metaKey ||
// // // //     event.ctrlKey ||
// // // //     event.altKey ||
// // // //     event.shiftKey
// // // //   ) {
// // // //     return false;
// // // //   }
// // // //   return true;
// // // // }

// // // // interface LinkTabProps {
// // // //   label?: string;
// // // //   href?: string;
// // // //   selected?: boolean;
// // // // }

// // // // function LinkTab(props: LinkTabProps) {
// // // //   return (
// // // //     <Tab
// // // //       component="a"
// // // //       onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
// // // //         // Routing libraries handle this, you can remove the onClick handle when using them.
// // // //         if (samePageLinkNavigation(event)) {
// // // //           event.preventDefault();
// // // //         }
// // // //       }}
// // // //       aria-current={props.selected && 'page'}
// // // //       {...props}
// // // //     />
// // // //   );
// // // // }

// // // // export default function NavTabs() {
// // // //   const [value, setValue] = React.useState(0);

// // // //   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
// // // //     // event.type can be equal to focus with selectionFollowsFocus.
// // // //     if (
// // // //       event.type !== 'click' ||
// // // //       (event.type === 'click' &&
// // // //         samePageLinkNavigation(
// // // //           event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
// // // //         ))
// // // //     ) {
// // // //       setValue(newValue);
// // // //     }
// // // //   };

// // //   return (
// // //     <>
// // //      {/* <Box sx={{ width: '100%' }}>
// // //       <Tabs
// // //          value={value}
// // //          onChange={handleChange}
// // //          aria-label="nav tabs example"
// // //         role="navigation"
// // //        >
// // //          <LinkTab label="Page One" href="/drafts" />
// // //          <LinkTab label="Page Two" href="/trash" />
// // //          <LinkTab label="Page Three" href="/spam" />
// // //        </Tabs>
// // //      </Box> */}
// // //      <div style={{textAlign:'center'}}>
// // //         axios.get('https://jsonplaceholder.typicode.com/')
// // //         then  ( ( data ) => {
// // //       console.log (data)     
// // //     } );




// // //        {/* <Joker/> */}
// // //       {/* <WeatherAPP/> */}
// // //       </div>
// // //       </>
// // //   );
// // // }


// // // export default App;


// // import * as React from 'react';
// // import axios from 'axios';

// // const App = () => {
// //   // State to store the API data
// //   const [data, setData] = React.useState(null);
// //   const [error, setError] = React.useState(null);

// //   // Fetch data on component mount
// //   // React.useEffect(() => {
// //   //   axios
// //   //     .get('https://jsonplaceholder.typicode.com/users')
// //   //     .then((response) => {
// //   //       setData(response.data); // Store the data in state
// //   //     })
// //   //     .catch((err) => {
// //   //       console.error(err);
// //   //       setError('Error fetching data'); // Handle error
// //   //     });
// //   // }, []); // Empty dependency array ensures this runs once on mount

// //   // axios.get("https://jsonplaceholder.typicode.com/users");
// //   //   then  ( ( data ) => {
// //   //     console.log (data) 
    
// //   //   } );


// //   React.useEffect(() => {

// //     axios.get("https://jsonplaceholder.typicode.com/users");
// //     then  ( ( data ) => {
// //        console.log (data) 
    
// //     } );
    
// //   }, []);





// //   return (
// //     <div style={{ textAlign: 'center' }}>
// //       <h1>Data Fetching Example</h1>

// //       {/* Render fetched data or loading/error states */}
      
// //        {/* {error && <p>{error}</p>}
// //       {!data && !error && <p>Loading...</p>}
// //       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}  */}
// //     </div>
// //   );
// // };

// // export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [post, setPost] = useState([]); // Initialize post as an empty array

//   // Fetch data using useEffect on component mount
//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//         console.table(response.data); // Log data in table format in the console
//         setPost(response.data); // Set the fetched data to state
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <>
//       {post.length > 0 ? (
//         <table border="1" cellPadding="10" style={{ margin: '0 auto' }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Username</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             {post.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.username}</td>
//                 <td>{item.email}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Loading...</p> // Display loading message until data is fetched
//       )}
//     </>
//   );
// };

// export default App;


import React from 'react'
import Joker from './Joker'
import WeatherAPP from './WeatherAPP'

const App = () => {
  return (
    <div>

{/* <Joker/> */}
<WeatherAPP/>
      
    </div>
  )
}

export default App

