export default function ({
    $axios,
    store,
    redirect
  }) {
    $axios.onError(error => {
      if (error.response && error.response.status === 500) {
        redirect('/login')
      }
    })
    $axios.interceptors.response.use(
      response => {
        if (response.status === 200) {
          if (response.request.responseURL && response.request.responseURL.includes('login')) {
            store.dispatch("setUser", response);
          }
        }
        return response
      }
    )
  }