import { mount } from '@vue/test-utils'
import svgIcon from '@/components/svgIcon.vue'
describe("svgIcon.vue", () => {
  it('show svg icon', done => {
    const wrapper = mount(svgIcon, {
      props: {
        iconClass: new Promise((resolve)=> {
          resolve({
            default: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" style="border-color: rgba(0,0,0,0);border-width: bpx;border-style: undefined" filter="none">
                <path d="M14.667 14.667v-8h2.667v8h8v2.667h-8v8h-2.667v-8h-8v-2.667z"></path>
              </svg>`
          })
        })
      }
    })
    setTimeout(() => {
      expect(wrapper.html()).toContain('<path d="M14.667 14.667v-8h2.667v8h8v2.667h-8v8h-2.667v-8h-8v-2.667z"></path>')
      done()
    }, 1)
  })
  it('import not svg file', done => {
    let errMessage = ''
    console["error"] = jest.fn( message => {
      errMessage = message
    })
    mount(svgIcon, {
      props: {
        iconClass: new Promise((resolve)=> {
          resolve({
            default: `
                <path d="M14.667 14.667v-8h2.667v8h8v2.667h-8v8h-2.667v-8h-8v-2.667z"></path>
              `
          })
        })
      }
    })
    setTimeout(() => {
      expect(errMessage).toBe('import file is not a svg file')
      done()
    }, 1)
  })
  it('import not a file', done => {
    let errMessage = ''
    console["error"] = jest.fn( message => {
      errMessage = message
    })
    mount(svgIcon, {
      props: {
        iconClass: new Promise((resolve, reject)=> {
          reject(new Error('can not find file'))
        })
      }
    })
    setTimeout(() => {
      expect(errMessage).toBe('can not find svg file')
      done()
    }, 1)
  })
  it('click event toggle', async() => {
    const wrapper = mount(svgIcon, {
      props: {
        iconClass: new Promise((resolve)=> {
          resolve({
            default: `
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" style="border-color: rgba(0,0,0,0);border-width: bpx;border-style: undefined" filter="none">
                <path d="M14.667 14.667v-8h2.667v8h8v2.667h-8v8h-2.667v-8h-8v-2.667z"></path>
              </svg>`
          })
        })
      }
    })
    wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
