import { useEffect, useState } from 'react';

function SelectUser(props){
    const [count, setCount] = useState(0);
    const [myProp, setMyprop] = useState(props.teste);

    useEffect( () => {
        console.log('atualiza sempre');
        console.log(props);
        if(count !== 0)
            console.log('count mudou');
        else
            console.log('count n mudou');
    })
    useEffect( () => {
        console.log('atualiza só se props muda');
        setMyprop(props.teste);
    },[props] )

    useEffect( () => {
        console.log('só carrega uma vez');
    }, [])

    //setCount é um emetodo assincrono
    function change(){
        setCount(count + 1)
        //esse codigo deve ir para useEffect
        /* if(count !== 0)
            console.log('count mudou');
        else
            console.log('count n mudou'); */
    }

    return (
        <>
        
            <h1>
                Select user
            </h1>
            <h2>{myProp}</h2>
            <div>
                
                <button onClick={() => change() }>click</button>
                <h2>{count}</h2>
                
                <br></br>
                <br></br>
            </div>
           
        </>
    )

}

export default SelectUser;