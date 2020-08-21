<template>
    <div id="md" class="markdown-body" v-html="md"></div>
</template>

<script>
    import marked from 'marked'

    export default {
        name: 'Home',
        data() {
            return {
                md: '',
            }
        },
        created() {
            fetch(process.env.VUE_APP_BASE_PATH + '/md' + this.$route.path + '.md').then(response => {
                response.text().then(text => {
                    this.md = marked(text)
                })
            }).catch(error => {
                console.log(error)
            })
        },
    }
</script>