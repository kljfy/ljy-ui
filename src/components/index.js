import Button from './button/Button.vue'
import Form from './form/Form.vue'
import FormItem from './formItem/FormItem.vue'
import Input from './input/Input.vue'

const components = [Button, Form, FormItem, Input]

export default {
  install(app) {
    components.map(component => {
      app.component(component.name, component)
    })
  }
}