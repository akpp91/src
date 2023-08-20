import { Route } from "react-router-dom";


// Use NormalRoute when you want to handle authorization based 
// on user roles and show different components/messages 
// for authorized and unauthorized users.

function CheckUserRole(roleOfTheUser, path)
{
    // debugger;
    // Over Here .. imagine you shoot a call to server
    // pass - roleOfTheUser 
    // Get the list of routes available from DB for roleOfTheUser
    // maintain that in collection

    var routesAvailable = ['/','/home', '/about']; //imagin this comes from DB

    var isRouteValidForThisRole = false;

    routesAvailable.map((route) =>{ 
        if(path == route)
        {
            isRouteValidForThisRole = true;
            return;
        }
    })

    return isRouteValidForThisRole;
}

function NormalRoute(props)
{
    // debugger;
    var roleOfTheUser =  sessionStorage.getItem("role");

    if(roleOfTheUser!=null)
    {
       var isUserAllowedForThisRoute =  
            CheckUserRole(roleOfTheUser, props.path);
        if(isUserAllowedForThisRoute)
        {
            return   <Route  path={props.path} 
            component={()=>{
                           debugger;
                           return <props.component {...props}/>
                       }}
         />      
        }
         else
         {
            return   <Route  path={props.path} 
            component={()=>{ return <h1>You are not authorized to view this route!!</h1> }}/>
        }

    }
    else
    {
        return   <Route  path={props.path} 
        component={()=>{ return <h1>Either your are not authorized to view this route or haven't logged in </h1> }}/>
    }
}

export default NormalRoute;



// import { Route } from "react-router-dom";

// function NormalRoute(props)
// {
    
//     debugger;
//     return   <Route  path={props.path} 
//                      component={()=>{
//                                     debugger;
//                                     return <props.component {...props}/>
//                                 }}
//              />      
// }

// export default NormalRoute;