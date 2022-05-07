'use strict'
const domContainer = document.querySelector('#root')


class AbrToTextTitle extends React.Component {
   constructor(props) {
      super(props)
   }

   render() {
      // this.props.abrev
      let i = 0
      let labels = []
      let words = this.props.text.split(' ')
      words.forEach(word =>{
         let letter = this.props.abrev.charAt(i)
         if(letter == word.charAt(0)) {
            labels.push(<label key={letter} className={"letra"}>{letter}</label>)
            labels.push(<label key={word} className={"texto"}>{word.substring(1)} </label>)
            i++
            return
         }
         labels.push(<label key={word} className={"texto"}>{word} </label>)
      })

      return (
         <div className={"container"}>
            {labels}
         </div>
      )
   }
}

ReactDOM.render(<AbrToTextTitle abrev="CIIP" text="Campus Internacional de Inteligencia y Pericia" />, domContainer)