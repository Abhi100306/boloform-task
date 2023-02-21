import React from 'react'

function Work() {
  return (
    <div style={{
        marginTop:150,
        padding:50
    }}>
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
        }}>How does BoloForms work?</text>
        <text>Set up your first workflow in just 3 easy steps.
</text>
    </div>
    <div style={{
        display:'flex',
        justifyContent:'center',        
    }}>
        
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <img src='2.2709e204.svg'></img>
            <text style={{
                fontWeight:'bold',
                fontSize:25
            }}>Step 1</text>
            <div>
                <text style={{
                    fontSize:20
                }}>Choose a template or add questions to create your Google Form.
</text>
            </div>
        </div>       
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <img src='1.b2cc23b0.svg'></img>
            <text style={{
                fontWeight:'bold',
                fontSize:25
            }}>Step 2</text>
            <div>
                <text style={{
                    fontSize:20
                }}>Enable Single/Multi Step approval and add necessary approvers!
</text>
            </div>
        </div>       
        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
        }}>
            <img src='3.1a7ec00e.svg'></img>
            <text style={{
                fontWeight:'bold',
                fontSize:25
            }}>Step 3</text>
            <div>
                <text style={{
                    fontSize:20
                }}>Now you can enable the workflow and share the Google Form.
</text>
            </div>
        </div>       
                
       
    </div>
    </div>
  )
}

export default Work