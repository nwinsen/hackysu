import React from "react";
import styled from "styled-components";


const WhyGrid = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0 150px 0 150px;
    flex-direction: column;
`


const WhySection = styled.section`
    display: flex;
    align-items: center;
    height: 750px;
    width: 100%
    position: absoulute;
    margin: 0 -150px 0 -150px;

    div {
        width: 100%:
        display: flex;
        align-items: end;
    }
    h1 {
        font-weight: 700;
        font-size: 80px;
        margin: 20px 150px 0 0;
       
    }

`


const ImageDiv =styled.div`
display: flex;
align-items: center;
justify-content: center;

img{
    height: 400px;
    margin-left: 200px;
    margin-bottom: 100px;

}

`

const WhyHeader = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;


    p {
    font-weight: 600;
    line-height: 1.3;
    font-size: 35px;
    margin: 50px 50px 10px 0;
    color: black;

    max-width: 50%;
    }

`


const Why = () => {
    return(
                    
    <WhySection id="why">
        <WhyGrid>
            <div><h1>Why Learn ASL?</h1></div>
            
            <WhyHeader>  
                <ImageDiv>
                    <img src="../ILY.png"/>
                </ImageDiv>  
                <p >
                We believe that it is important for everyone to learn sign language.
                        By learning sign language, individuals can build stronger relationships 
                        with deaf and hard of hearing family members, friends, or colleagues and 
                        participate more fully in a diverse and inclusive society. Additionally, 
                        learning sign language can be a valuable asset in various career fields, 
                        such as education, social work, interpreting, and healthcare. Overall, 
                        we believe that learning sign language is a valuable and enriching experience 
                        that has numerous practical and personal benefits.
                </p>
        </WhyHeader>
        </WhyGrid>
    </WhySection>

       
    )
}

export default Why