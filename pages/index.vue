<template>
  <div>
    <p v-if="$fetchState.pending">Fetching posts...</p>
    <p v-else-if="$fetchState.error">
      An error occurred :( <a href="/login">Log in</a>
    </p>
    <div v-else>
      <h1>Latest Project News</h1>
      <p>
        <a href="/login">Log in</a>
      </p>
      <ul>
        <li v-for="(post, index) of posts.results" :key="index">
          <p>{{ post.title }}</p>
          <p>{{ post.summary }}</p>
          <p>{{ post.content }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      posts: [],
    }
  },
  async fetch() {
    this.posts = await fetch('http://localhost:8000/api/blog/').then((res) =>
      res.json()
    )
  },
}
</script>
