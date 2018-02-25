import React, { Component } from 'react'
import { Img, Wrapper} from './BasicComponents'
import styled from 'styled-components'
import axios from 'axios'




class RecipePage extends Component {

    state = {
        recipe : {},
        ingredientsOrPreparation : "ingredients"
    }

    getRecipeInfo = () => {
        const recipeId = this.props.match.params.recipeId

        axios({
            method: 'get',
            url: `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${recipeId}/information?includeNutrition=false`,
            headers: { "X-Mashape-Key" : process.env.REACT_APP_XMashapeKey}
          })
        .then((res) => { this.setState({recipe : res.data}) })
    }

    ingredientsOrPreparation = () => {
        this.state.ingredientsOrPreparation === "ingredients"?
        this.setState({ingredientsOrPreparation : "preparation"})
        :
        this.setState({ingredientsOrPreparation : "ingredients"})
    } 
    
    componentWillMount() {
        this.getRecipeInfo()
    }

    render() {

        const recipe = this.state.recipe
       
        return (
            <Wrapper>

                <div>{recipe.title}</div>

                <RecipeContent>
                    <RecipeMenu>
                        <div onClick={() => this.ingredientsOrPreparation()}>Ingredients</div>
                        <div onClick={() => this.ingredientsOrPreparation()}>Preparation</div>
                    </RecipeMenu>

                </RecipeContent>

            </Wrapper>
        )
    }
  }
  
  export default RecipePage;

 const RecipeContent = Wrapper.extend`
  width : 90%;
  height : auto;
 `

 const RecipeMenu = Wrapper.extend`
  flex-direction : row;
  justify-content : space-around;
`