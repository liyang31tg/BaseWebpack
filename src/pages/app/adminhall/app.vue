<template>
    <div style="margin:0 auto;column-rule: aliceblue;color: aqua">
        LiYanssasdg:{{accountname}}
    </div>
</template>

<style>
    body{
        font-size: 18px;
    }
    .cc{
        font-family: "Andale Mono";
    }
</style>

<script>
    import print from '../../../../src/print';
    print()
    console.log("dddd");
    export default {
        data() {
            return {
                accountname:"liyang"
            }
        },
        created(){
            console.log("asdasdfafsad")
        }
    };

</script>