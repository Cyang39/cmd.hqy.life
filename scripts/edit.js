// if(!window.localStorage.getItem("rulesDB")) {
//   // TODO: 初始化
// }
// window.document.getElementsByName("rules")[0].value = window.localStorage.getItem("rulesDB")
// window.document.getElementsByName("save")[0].addEventListener("click", function() {
//   window.localStorage.setItem("rulesDB",  window.document.getElementsByName("rules")[0].value)
// })

new Vue({
  el: "#edit",
  template: `
  <div style="width:60em;margin:5em auto;">
    <div v-for="(rule, i) in rules" :key="i">
      <span><small>Cmd: </small></span>
      <input v-model="rule.fmt">
      <span><small>URL: </small></span>
      <input v-model="rule.tpl" style="width: 30em;">
      <button @click="togle(i)">more</button>
      <button @click="toDel(i)">dele</button>
      <div v-show="isShow(i)" style="display:flex; flex-direction: column;margin:.5em;border-left: 1px solid #ddd;padding-left: .5em;">
        <div>
          <span><small>Info: </small></span>
          <input style="width:40em;" v-model="rule.inf" placeholder="no information">
        </div>
        <div style="margin-top:.5em;">
        <span><small>Alias: </small></span>
          <input style="margin-right:.5em;" v-model="rules[i].lnk[lni]" v-for="(ln, lni) in rule.lnk" :key="lni">
        </div>
        <div style="padding-left: 2.5em;margin-top:.5em;">
          <button @click="addAlias(i)">Add alias</button>
          <span><small>(Click \`Save\` button will auto remove the empty alias.)</small></span>
        </div>
      </div>
    </div>
    <div style="margin:1em;">
      <button @click="toSave">Save</button>
      <button @click="toAdd">Add</button>
      <button disabled>Download</button>
      <button disabled>Upload</button>
    </div>
  </div>
  `,
  data: () => {
    return {
      moreOpen: [],
      rules: JSON.parse(window.localStorage.getItem("rulesDB"))
    }
  },
  methods: {
    logDB() {
      console.log(this.rules)
    },
    toDel(i) {
      if(confirm('Are you sure to delete cmd `' + this.rules[i].fmt + '`?')) {
        this.rules = this.rules.slice(0, i).concat(this.rules.slice(i + 1))
      }
    },
    toSave() {
      this.rules = this.rules.filter(i => i.fmt)
      this.rules.forEach(rule => {
        rule.lnk = rule.lnk.filter(i => i)
      })
      window.localStorage.setItem("rulesDB", JSON.stringify(this.rules))
      alert("Saved sucessfully.")
    },
    toAdd() {
      this.moreOpen = []
      this.rules.push({fmt:"", tpl: "", lnk: [], inf: ""})
    },
    togle(i) {
      // this.moreOpen = []
      for(let n = 0; n < this.rules.length; n++) {
        if(n !== i) this.$set(this.moreOpen, n, false)
      }
      this.$set(this.moreOpen, i, this.moreOpen[i] ? false : true)
    },
    isShow(i) {
      return this.moreOpen[i] ? true : false
    },
    addAlias(i) {
      this.rules[i].lnk.push("")
    }
  }
})