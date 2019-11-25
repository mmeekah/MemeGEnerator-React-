import React, {Component} from "react"


class MemGenerator extends Component{

    constructor(){
        super ()
        this.state={
            topText: "",
            bottomText: "",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSumbit=this.handleSumbit.bind(this)
    }

componentDidMount(){
    fetch("http:api.imgflip.com/get_memes")
      .then(response=>response.json())
      .then(response=>{
          const{memes}=response.data
          this.setState({
              allMemeImgs:memes
          })
      })
}


handleChange(event){
 const {name,value}=event.target
   this.setStsate({[name]: value})
  
     }


 handleSumbit(event){
  event.preventDefault()

  const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length )
  const randMemeImg=this.state.allMemeImgs[randNum].url

  this.setState({randomImg: randMemeImg})


 }    



    render(){
        return( 
            <div>
                <form  onSubmit={this.handleSumbit}className="meme-form">
                <input
                type="text"
                 name="topText"
                 placeholder="Top Text"
                 value={this.state.topText}
                 onChange={this.handleChange}
                />
                <input
                name="bottomText"
                type="text"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
                />


                <button > Gen</button>

                <div className="meme">
                    <img src="this.state.randomImg" alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>

                </div>

                </form>
            </div>
        )
    }


}


export default MemGenerator