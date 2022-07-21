import { Controller } from "@hotwired/stimulus"
import {Howl} from "howler"
import {FetchRequest, patch} from "@rails/request.js"
export default class extends Controller {
  
  async updatePosition(){
    const response = await patch(window. location.href, { body: JSON.stringify({ position: this.sound.seek() }) })
    if (response.ok) {
      console.log("okay")
    }
  }

  async getData(){
    const request = new FetchRequest('get',window.location.href + ".json")
    const response = await request.perform()
    if (response.ok) {
      const body = JSON.parse(await response.text)
      console.log(body)
      this.sound = new Howl({
        src: [body.audio_url]
      })
      this.sound.seek(body.position)
    }
  }

  playMusic(){

    this.sound.play()
  }

  pauseMusic(){
    this.sound.pause()
    console.log(this.sound.seek())
    this.updatePosition()
  }

  stopMusic(){
    this.sound.stop()
  }
  initialize(){
    this.getData()
  }
  connect() {
    
  }
}
