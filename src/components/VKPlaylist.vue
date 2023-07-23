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
      // const regex = /-(\d+)_(\w+)_?/;
      const playlistRegex = /\/music\/playlist\/(-?\d+)_(\w+)/;
      const albumRegex = /\/music\/album\/(-?\d+)_(\d+)_(\w+)/;

      const playlistMatches = url.match(playlistRegex);
      const albumMatches = url.match(albumRegex);

      if (playlistMatches && playlistMatches.length === 3) {
        return {
          ownerId: playlistMatches[1],
          playlistId: playlistMatches[2],
        };
      }

      if (albumMatches && albumMatches.length === 4) {
        return {
          ownerId: albumMatches[1],
          playlistId: `${albumMatches[2]}_${albumMatches[3]}`,
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
