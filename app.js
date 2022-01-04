const FirstInteraction = document.getElementById("first-interaction");
const CheckBoxes = document.getElementById("checking-boxes");

(()=>setTimeout(()=>FirstInteraction.style.display = "block",3000))();
(()=>setTimeout(()=>CheckBoxes.style.display = "block",5000))();

//------------------ANSWERs ------------//

const positiveAnswer = document.getElementById("positive-answer");

function answer1(){if(document.getElementById("case").checked ==true){
    const SecondInteraction = document.getElementById("second-interation");
    SecondInteraction.innerHTML = "Je n'ai pas de nom";
    setTimeout(()=>CheckBoxes.style.display = "none",2500);

    const thirdInteraction = document.getElementById("third-interaction");

    (()=>setTimeout(()=>thirdInteraction.innerHTML = "Je suis juste un essaie",3500))();

    const FourthInteraction = document.getElementById("fourth-interaction");

    (()=>setTimeout(()=>FourthInteraction.style.display = "block",5000))();

    const FifthInteraction = document.getElementById("fifth-interaction");
    const InputInteractionOne = document.getElementById("input-interaction-one");

    (()=>setTimeout(()=>FifthInteraction.style.display = "block",9000))();

  
       
    const sixthInteraction = document.getElementById("sixth-interaction");
    const Mybutton = document.querySelector("span");
    Mybutton.addEventListener("click", ()=>{
        const InputOneTest1 = /anicet/i;
        const InputOneTest1Result = InputOneTest1.test(InputInteractionOne.value);
        const InputOneTest2 = /Kandy/i;
        const InputOneTest2Result = InputOneTest2.test(InputInteractionOne.value);
        const InputOneTest3 = /guilain/i;
        const InputOneTest3Result = InputOneTest3.test(InputInteractionOne.value);

        if((InputOneTest1Result)==true){
            sixthInteraction.innerHTML =`Ca fait du bien de connaitre <br> l'ami de mon createur`;
            const seventhInteraction = document.getElementById("seventh-interaction");
            (()=>setTimeout(()=>seventhInteraction.innerHTML = "Il m'a personnellement chargé <br> de vous envoyer voir ailleurs <br> s'il y est",3500))();
            const eighthInteraction = document.getElementById("eighth-interaction");

            (()=>setTimeout(()=> eighthInteraction.innerHTML = "Qu'avez à repondre à ca ?",5300))();
            
        }else if((InputOneTest2Result)==true){
            sixthInteraction.innerHTML = "Ca va Kandy ? Kicukiro dit quoi ?";
        }else if((InputOneTest3Result)==true){
            sixthInteraction.innerHTML ='Ravie de vous connaitre <br> monsieur guilain';
            const seventhInteraction = document.getElementById("seventh-interaction");

            (()=>setTimeout(()=>seventhInteraction.innerHTML = "Vous êtes son Père ? <br> Je crois avoir une idée <br> de qui vous êtes",3500))();

            const eighthInteraction = document.getElementById("eighth-interaction");

            (()=>setTimeout(()=> eighthInteraction.innerHTML = "<div><img src='https://scontent.fkgl4-1.fna.fbcdn.net/v/t1.6435-9/69859747_2373342962994995_5954268627376013312_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=SIazkWcS9cAAX_OVNzV&_nc_ht=scontent.fkgl4-1.fna&oh=00_AT9OKFe70QWAhk08YuEF2MdUZ4pcgtOE5cs_yE6TCHUJZQ&oe=61F9C469' alt = 'dadpic' id='img2'><br>Est-ce vous ?",9000))();
            const InputInteractionTwo = document.getElementById("input-interaction-two");
            const mySecondButton = document.getElementById("button2");
            mySecondButton.addEventListener("click", ()=>{
            if(!InputInteractionTwo ==""){
                const ThenthInteraction = document.getElementById("tenth-interaction");
                setTimeout(()=>ThenthInteraction.innerHTML = `Il ya une ressemblance <br> en effet &nbsp; <i class="fa fa-smile-o" aria-hidden="true"></i>&nbsp;`,1000);

                const eleventhInteraction = document.getElementById("eleventh-interaction");
                setTimeout(()=>eleventhInteraction.innerHTML = "Vous avez passé une bonne journée ? <br> fatigué j'imagine ?",2500);

                const InputInteractionThree = document.getElementById("input-interaction-three");
                const TwelvthInteraction = document.getElementById("twelvth-interaction");
                const ThirteenInteraction = document.getElementById("thirteenth-interaction");
                const myThirdButton = document.getElementById("button3");
                (()=>setTimeout(()=>TwelvthInteraction.style.display = 'block',5000))();
                myThirdButton.addEventListener("click", ()=>{
                    const InputInteractionThreeTest1 = /fatigué/i;
                    const InputInteractionThreeTest1Result = InputInteractionThreeTest1.test(InputInteractionThree.value);
                    const InputInteractionThreeTest2 = /non/i;
                    const InputInteractionThreeTest2Result = InputInteractionThreeTest2.test(InputInteractionThree.value);
                    const InputInteractionThreeTest3 = /oui/i;
                    const InputInteractionThreeTest3Result = InputInteractionThreeTest3.test(InputInteractionThree.value);
                    if((InputInteractionThreeTest1Result)==true){
                        ThirteenInteraction.innerHTML = `Oh je comprend que vous <br> soyez fatigué; vous <br> devez prendre soins <br> de ces dûrs à cuires`;
                    }else if((InputInteractionThreeTest2Result)==true){
                        ThirteenInteraction.innerHTML=`Oh vous avez l'air d'avoir <br> eu une bonne journée ! <br> C'était un plaisir de vous parler`;

                    }else if((InputInteractionThreeTest3Result)==true){
                        ThirteenInteraction.innerHTML="Ca me fait plaisir de savoir <br> que vous allez bien ! <br> C'était un plaisir de vous parler <br> Je ne suis plus habilité <br> à vous dire un mot de plus!"
                    }
                    

                }
            )}

    })
     }
     else{
            sixthInteraction.innerHTML = `Desole Yannick ne m'a pas parlé de vous , <br> vous etes qui pour lui ?`;
        }

    
        const ninthInteraction = document.getElementById("ninth-interaction");
        (()=>setTimeout(()=>ninthInteraction.style.display = 'block',11000))();

        


    })


}
}

//================third-interaction===============//

