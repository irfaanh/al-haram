import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

export default function AdminDashboard() {
    const stats = [
        { title: "Total Courses", value: "12", icon: Activity, change: "+2.5% from last month" },
        { title: "Active Users", value: "+2350", icon: Users, change: "+180.1% from last month" },
        { title: "Gallery Images", value: "450", icon: CreditCard, change: "+19% from last month" },
        { title: "Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1% from last month" },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">Overview of your platform activity.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition-colors">
                            <div className="flex flex-row items-center justify-between pb-2">
                                <h3 className="text-sm font-medium text-gray-400">{stat.title}</h3>
                                <Icon className="h-4 w-4 text-gray-400" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Recent Sales</h3>
                    <p className="text-sm text-gray-400 mb-4">You made 265 sales this month.</p>
                    <div className="space-y-4">
                        {/* Dummy list items */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-9 w-9 rounded-full bg-white/10" />
                                    <div>
                                        <p className="text-sm font-medium leading-none">User {i}</p>
                                        <p className="text-xs text-gray-400">user{i}@example.com</p>
                                    </div>
                                </div>
                                <div className="font-medium">+$1,999.00</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border border-white/10 bg-white/5 p-6">
                    <h3 className="font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                                <div>
                                    <p className="text-sm">User updated profile settings</p>
                                    <p className="text-xs text-gray-400">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
