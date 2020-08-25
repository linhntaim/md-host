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
            const md = this.$route.path === '/' ? '/index' : this.$route.path
            const basePath = process.env.VUE_APP_BASE_PATH
            fetch(basePath + '/md' + md + '.md').then(response => {
                response.text().then(text => {
                    this.md = marked(text)
                        .replace(new RegExp('(src|href)="(../)*_assets/', 'g'), '$1="' + basePath + '/md/_assets/')
                        .replace(new RegExp('(src|href)="(?<!http)((../)+|/?md/|/?)(.+)\\.md', 'g'), '$1="' + basePath + '/$4')
                        .replace(new RegExp('(src|href)="(?<!http)((../)+|/?html/|/?)(.+)\\.html', 'g'), '$1="' + basePath + '/html/$4.html')
                })
            }).catch(error => {
                console.log(error)
            })
        },
    }
</script>