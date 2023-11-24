import React from "react";

const MasterPage=({children})=>
{
    return(
<div>
    <header>
       <h3>React Hook Practice</h3> 
    </header>
    <main>
        {children}
    </main>
    <footer>
        <h5>-By Faraz</h5>
        
    </footer>
</div>

    )
}
export default MasterPage;