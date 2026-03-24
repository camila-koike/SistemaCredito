class NotificationService {
  constructor() {
    this.notifiedUsers = new Set();
  }

  notifyLowCredits(user) {
    if (user.credits < 20 && !this.notifiedUsers.has(user.id)) {
      this.notifiedUsers.add(user.id);
      return true;
    }

    return false;
  }
}

module.exports = NotificationService;