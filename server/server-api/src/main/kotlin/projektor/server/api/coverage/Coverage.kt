package projektor.server.api.coverage

data class Coverage(
    val groups: List<CoverageGroup>,
    val overallStats: CoverageStats
)
