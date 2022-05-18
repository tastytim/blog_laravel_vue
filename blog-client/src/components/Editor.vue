<template>
  <EditorContent :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
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
      extensions: [StarterKit],
      editorProps: {
        attributes: {
          class: "bg-gray-300 min-w-full w-full focus:outline-none prose mt-16 text-gray-500 prose-sm lg:prose ",
        },
      },
      onUpdate:(context)=>{
          const teaser = context.editor.state.doc.content.content.find(
              c=> c.type.name == 'paragraph' 
          )

         emit('update:teaserValue', teaser.textContent)
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
