import React, { Component } from 'react'
import { Img, Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class PreparationView extends Component {

    render() {

       const stepsList = () => {
           if (this.props.instructions) {
               return this.props.instructions[0].steps.map((step, index) => {
                return (
                    <div key={index}>
                        <div>{step.step} </div>
                    </div>
                )
            })
           }
       }


   

        return (
           <Wrapper>
               {stepsList()}
           </Wrapper>


        )
    }
  }
  
  export default PreparationView;