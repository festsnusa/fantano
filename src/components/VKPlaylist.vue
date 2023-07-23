<template>
  <div id="vkPlaylist" ref="vkPlaylist"></div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'VKPlaylist',
  props: {
    playlistUrl: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 400
    }
  },
  setup(props) {

    const vkScriptLoaded = ref(false)

    const extractOwnerIdAndPlaylistId = (url) => {
      const regex = /playlist\/-([\d]+)_([\w]+)/;
      const matches = url.match(regex);
      if (matches && matches.length === 3) {
        return {
          ownerId: `-${matches[1]}`,
          playlistId: matches[2],
        };
      }
      return {
        ownerId: null,
        playlistId: null,
      };
    };

    const { ownerId, playlistId } = extractOwnerIdAndPlaylistId(props.playlistUrl)

    onMounted(() => {

      if (!vkScriptLoaded.value) {
        const script = document.createElement('script')
        script.src = 'https://vk.com/js/api/openapi.js?168'
        script.async = true
        script.defer = true
        document.head.appendChild(script)

        script.onload = () => {
          vkScriptLoaded.value = true
          embedPlaylist()
        }
      } else {
        embedPlaylist()
      }
    })

    const embedPlaylist = (element) => {
      VK.Widgets.Playlist('vkPlaylist', ownerId, playlistId, props.width, props.height, {
        mode: 4 // Display mode (0 - list, 4 - tiles)
      })
    }

    return {
      embedPlaylist
    }
  }
}
</script>
