<template>
  <EditorContent :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import StarterKit from "@tiptap/starter-kit";
import {watch } from 'vue'
export default {
  components: { EditorContent },
  props:{
      modelValue:{
          type:String,
          default:''
      },
      teaserValue:{
          type:String,
          default:''
      }
  },
  setup(props, {emit}) {
    const editor = useEditor({
      content: props.modelValue,
      TextStyle,
      extensions: [StarterKit, Color.configure({
  types: ['textStyle'],
})],
      
      editorProps: {
        attributes: {
          class: "bg-gray-100 min-w-full w-full focus:outline-none prose  text-gray-500 prose-sm lg:prose rounded",
        },
      },
      onUpdate:(context)=>{
          const teaser = context.editor.state.doc.content.content.find(
              c=> c.type.name == 'paragraph' 
          )
        if(teaser){
            emit('update:teaserValue', teaser.textContent)
        }
         
        emit('update:modelValue', context.editor.getHTML())
    }
    });
    watch(()=> props.modelValue, (value)=>{
        if(editor.value.getHTML() == value){
            return
        }
        editor.value.commands.setContent(props.value);
    })

    
    return { editor };
  },
};
</script>

<style></style>
