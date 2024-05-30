const dateEntered = document.querySelector('.input-box');
const output_box = document.querySelector('.answer');

let ans = [];

const handleCalculate = () =>{
    if(dateEntered.value===""){
        alert("Enter a valid date");
        return;
    }
    let date = dateEntered.value.split('-')

    let dob = [Number(date[0]), Number(date[1]), Number(date[2])];

    const curr_date = new Date();

    let curr = [curr_date.getFullYear(), curr_date.getMonth()+1, curr_date.getDate()];

    

    console.log(curr[0], curr[1], curr[2]);
    console.log(dob[0], dob[1], dob[2]);

    let borrow = 0 ;

    if(curr[2]<dob[2]){
        if(dob[1]&1 !== 0){
            ans[2]=31+curr[2]-dob[2];
        }else{
            if(dob[1]===2){
                if(dob[0]%4 === 0){
                    ans[2]=29+curr[2]-dob[2];
                }else{
                    ans[2]=28+curr[2]-dob[2];
                }
            }else if(dob[1]===8){
                ans[2]=31+curr[2]-dob[2];
            }else{
                ans[2]=30+curr[2]-dob[2];
            }
        }
        borrow = 1;
    }else{
        ans[2]=curr[2]-dob[2];
    }

    if(curr[1]-borrow<dob[1]){
        ans[1]=12+curr[1]-borrow-dob[1];
        borrow=1;
    }else{
        ans[1]=curr[1]-borrow-dob[1];
        borrow=0;
    }

    ans[0]=curr[0]-borrow-dob[0];

    if(ans[0]<0){
        alert("enter a valid date");
    }else{
        const output = document.createElement('p');
        let text = "You are "
            text+= ans[0]!==0 ? `${ans[0]} years,` : "";
            text+=ans[1]!==0 ? ` ${ans[1]} months,` : "";
            text+=ans[2]!==0 ? ` ${ans[2]} days`:"";
            text+=" old";
        output.innerText=text;
        output_box.innerHTML="";
        output_box.appendChild(output);
    }

    console.log(ans[0],ans[1],ans[2]);
}

document.querySelector('.btn').addEventListener('click',handleCalculate);



