namespace MCLauncherCompare;

public class FeatureDetail
{
    public required string Id { get; set; }
    public FeatureStatus Status { get; set; }
    public string? Note { get; set; }
    public object? Value { get; set; }
}