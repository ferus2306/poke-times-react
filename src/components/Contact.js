import React from 'react'


// Install Router command: npm install react-router-dom
// when adding props, we automatically import and can use Router functionality
const Contact = (props) => {
    // console.log(props)


    // programatically redirect to the about link. 
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);

    return (
        <div className='container'>
            <h4 className='center'>Contact</h4>
            <p>lorem test Contact</p>
        </div>
    )
}

export default Contact