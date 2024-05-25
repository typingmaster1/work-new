function Random(){
    let number= Math.random()*100;
    return <p style={{backgroundColor:`red`}}>Random number is :{Math.round(number)}</p>
}
export default Random;