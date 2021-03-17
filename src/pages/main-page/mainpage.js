import imgURL from '/coding.jpeg'
import './mainpage.css'

class MainPage {
  render() {
    const content = /* html */`
            <div class="section mp">
                <div class="columns">
                    <div class="column">
                        <h1 class="title mp">Ronald Pang</h1> 
                        <p class="description mp">
                          FullStack Developer <br/> 
                          HTML CSS Javascript <br/>
                          <span class="span mp"> with the extention of.... </span> </br>
                          Typescript SCSS
                        </p>
                        <button id="mainpgButton" class="button is-black mp"> Get Started </button>
                    </div>
                    <div class="column">
                        <img width="500px" height="500px" class="img mp" src=${imgURL}>
                    </div>
                </div>
            </div>`
    return content
  }
}

export default MainPage
