package com.it342.miniapp.session

import android.content.Context
import android.content.SharedPreferences

class SessionManager(context: Context) {

    private val prefs: SharedPreferences =
        context.getSharedPreferences("session", Context.MODE_PRIVATE)

    fun login() {
        prefs.edit().putBoolean("loggedIn", true).apply()
    }

    fun logout() {
        prefs.edit().clear().apply()
    }

    fun isLoggedIn(): Boolean {
        return prefs.getBoolean("loggedIn", false)
    }

    fun saveUser(user: String) {
        prefs.edit().putString("user", user).apply()
    }

    fun getUser(): String? {
        return prefs.getString("user", null)
    }
}
