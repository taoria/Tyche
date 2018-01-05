<<template>
<div>
    <input-field v-if="showName"  :value='num' :i-label='name' ></input-field>
    <input-field v-else :value='num' i-label='' ></input-field>
</div>
</template>
<<script>
export default {
    props:['showName','num','name'],
  data(){
  
    return{
      value:'',
      showName:true
    }
  }
}
</script>
