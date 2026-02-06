import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Headers
import retrofit2.http.POST
import retrofit2.http.Query

interface AuthApi {

    @Headers("Content-Type: application/json")
    @POST("api/auth/login")
    fun login(@Body request: LoginRequest): Call<UserResponse>

    @Headers("Content-Type: application/json")
    @POST("api/auth/register")
    fun register(@Body request: RegisterRequest): Call<UserResponse>

    @GET("api/auth/me")
    fun me(): Call<UserResponse>
}
