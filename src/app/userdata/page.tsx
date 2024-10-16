{/** {cache: "no-cache"} is a useful directive to ensure you always receive the latest data from an API, but it should be used judiciously to balance performance and freshness of data. */}

{/**Static Page Behavior in Next.js: By default, Next.js generates static pages for both static routes and dynamic routes. This means that even if you're using dynamic routes, the pages may be pre-rendered and served as static content. */}

{/**
The {cache: "no-cache"} directive is used in the context of making HTTP requests, particularly with APIs, to control how the browser and server handle caching. 

When to Use

Dynamic Data: It's particularly useful when you're fetching data that may change frequently and you need the latest information every time you make a request (like live data updates).
Development and Testing: During development, you might want to prevent caching to see changes immediately without needing to clear the cache manually. */}

async function UserData(){
    const url="https://jsonplaceholder.typicode.com/users";
    const fetchData=await fetch(url,{cache:"no-cache"});//ensure you always receive the latest data from an API
    const response=await fetchData.json();
    console.log(response);
    return(
        <div>
        <h1 style={{color:"blue",fontSize:"50px",fontWeight:"bold",textAlign:"center",padding:"20px",margin:"20px"}}>Data Integration</h1>
        
        
        
        {/*<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{JSON.stringify(response,null,2)}</h1 >*/}

        <br/>

<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[1].username}</h1 >
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[6].company.bs}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[9].phone}</h1>
<h1 style={{color:"GrayText",fontSize:"30px",fontWeight:"bolder",textAlign:"center"}}>{response[5].address.suite}</h1 >
        </div>

       
    )
}
export default UserData