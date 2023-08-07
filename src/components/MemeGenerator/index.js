import {Component} from 'react'
import {
  AppContainer, 
  FormContainer,
  Heading,
  Label,
  Input,
  Button,
  MemeContainer,
  MemeText
  } from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeInput = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  onClickSubmitEvent = event => {
    event.preventDefault()
    
    const {bottomText, topText,imgUrl, fontSize} = this.state
    const memeContainerEl = document.getElementById('memeContainer')
    memeContainerEl.style.backgroundImage = `url('${imgUrl}')`
    
    const topTextEl = document.getElementById('topText')
    topTextEl.textContent = topText
    memeContainerEl.style.fontSize = fontSize + "px"

    const bottomTextEl = document.getElementById('bottomText')
    bottomTextEl.textContent = bottomText
    memeContainerEl.style.fontSize = fontSize + "px"
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize} = this.state
    return (
      <AppContainer>
        <FormContainer>
          <Heading>Meme Generator</Heading>
          
          <Label htmlFor="input1">Image URL</Label>
          <Input type="text" id="input1" name="imgUrl" onChange={this.onChangeInput} value={imgUrl} />
          
          <Label htmlFor="input2">Top Text</Label>
          <Input type="text" id="input2" name="topText" onChange={this.onChangeInput} value={topText} />
          
          <Label htmlFor="input3">Bottom Text</Label>
          <Input type="text" id="input3" name="bottomText" onChange={this.onChangeInput} value={bottomText} />
          
          <Label htmlFor="input4">Font Size</Label>
          <Input as="select" id="input4" name="fontSize" onChange={this.onChangeInput} value={fontSize}>
            {
              fontSizesOptionsList.map(item => <option key={item.optionId} value={item.optionId}>{item.displayText}</option>)
            }
          </Input>
          
          <Button type="button" onClick={this.onClickSubmitEvent}>Generate</Button>
        </FormContainer>
        <MemeContainer id="memeContainer" data-testid="meme">
          <MemeText id="topText"></MemeText>
          <MemeText id="bottomText"></MemeText>
        </MemeContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator