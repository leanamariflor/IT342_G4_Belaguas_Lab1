package com.it342.miniapp.ui

import UserResponse
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import com.google.gson.Gson
import com.it342.miniapp.navigation.Screen
import com.it342.miniapp.session.SessionManager

data class StatItem(
    val label: String,
    val value: String
)

@Composable
fun DashboardScreen(navController: NavController) {

    val context = LocalContext.current
    val sessionManager = remember { SessionManager(context) }

    LaunchedEffect(Unit) {
        if (!sessionManager.isLoggedIn()) {
            navController.navigate(Screen.Login.route) {
                popUpTo(Screen.Login.route) { inclusive = true }
                launchSingleTop = true
            }
        }
    }

    val userJson = sessionManager.getUser()
    val user = Gson().fromJson(userJson, UserResponse::class.java)

    val stats = listOf(
        StatItem("Account Status", "Active"),
        StatItem("Role", user.role),
        StatItem("Session", "Authenticated")
    )

    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        contentAlignment = Alignment.Center
    ) {

        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(24.dp),
            elevation = CardDefaults.cardElevation(8.dp)
        ) {

            Column(modifier = Modifier.padding(24.dp)) {


                Text(
                    text = "Dashboard",
                    style = MaterialTheme.typography.headlineMedium
                )
                Text(
                    text = "Welcome! You are logged in.",
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                Spacer(modifier = Modifier.height(24.dp))


                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(7.dp)
                ) {
                    stats.forEach { stat ->
                        StatCard(
                            title = stat.label,
                            value = stat.value
                        )
                    }
                }

                Spacer(modifier = Modifier.height(24.dp))


                ActionRow(
                    title = "View Profile",
                    subtitle = "See your account information",
                    buttonText = "Open"
                ) {
                    navController.navigate(Screen.Profile.route)
                }

                Spacer(modifier = Modifier.height(12.dp))


                ActionRow(
                    title = "Logout",
                    subtitle = "End your session",
                    buttonText = "Logout"
                ) {
                    sessionManager.logout()
                    navController.navigate(Screen.Login.route) {
                        popUpTo(Screen.Dashboard.route) { inclusive = true }
                    }
                }
            }
        }
    }
}

@Composable
fun StatCard(
    title: String,
    value: String
) {
    Card(
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = title,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = value,
                style = MaterialTheme.typography.titleMedium
            )
        }
    }
}

@Composable
fun ActionRow(
    title: String,
    subtitle: String,
    buttonText: String,
    onClick: () -> Unit
) {
    Card(
        shape = RoundedCornerShape(16.dp),
        border = BorderStroke(1.dp, MaterialTheme.colorScheme.outlineVariant)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.SpaceBetween
        ) {

            Column {
                Text(title, style = MaterialTheme.typography.titleMedium)
                Text(
                    subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Button(
                onClick = onClick,
                shape = RoundedCornerShape(50)
            ) {
                Text(buttonText)
            }
        }
    }
}
