import React from 'react'

function Workflow() {
  return (
    <div>
    <div style={{
        display:"flex",
        justifyContent:'center',
        paddingTop:50,
        paddingBottom:50,
        flexDirection:'column',
        alignItems:'center'
    }}>
        <text style={{
            fontSize:30,
            fontWeight:'bold'
        }}>Fully Automated Workflows
        </text>
        <text>No more painful manual approval management and wasting countless hours.</text>
    </div>
    <div style={{
        display:'flex',
        justifyContent:'center'
    }}>
        <img src='pr_dyncaseroute.02285ff2.png'/>
    </div>
        <text style={{
            display:'flex',
            justifyContent:'center',
            marginTop:10
        }}>BoloForms workflows acts as a glue holding together all your approval processes.
</text>
    </div>
  )
}

export default Workflow