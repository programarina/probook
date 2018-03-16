
class RedirectionService {

  redirect(path) {
    window.location.assign(path);
  }
}
export const redirectionService = new RedirectionService();