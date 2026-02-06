package com.it342.miniapp

import androidx.compose.runtime.Composable
import androidx.navigation.compose.*
import androidx.navigation.NavHostController
import com.it342.miniapp.ui.DashboardScreen
import com.it342.miniapp.ui.LoginScreen
import com.it342.miniapp.ui.ProfileScreen
import com.it342.miniapp.ui.RegisterScreen

@Composable
fun AppNavigation(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = "login"
    ) {
        composable("login") {
            LoginScreen(navController)
        }
        composable("register") {
            RegisterScreen(navController)
        }
        composable("dashboard") {
            DashboardScreen(navController)
        }
        composable("profile") {
            ProfileScreen(navController)
        }
    }
}

