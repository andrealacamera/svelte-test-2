<script>
  import { LL } from '../i18n/i18n-svelte'
  
  
  /** 
   * @type {string} 
   */
  let a = "The answer is 42"

</script>

<h1>{$LL.welcome()}</h1>
<p>{a}</p>
