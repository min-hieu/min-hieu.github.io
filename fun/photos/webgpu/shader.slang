uniform float time;

[shader("vertex")]
float4 vertexMain() : SV_Position
{
    return float4(0, 0, 0, 1);
}

[shader("fragment")]
float4 fragmentMain() : SV_Target
{
    return float4(1, 0, 0, 1);
}
