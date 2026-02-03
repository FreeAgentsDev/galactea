'use client';

import { useEffect, useState } from 'react';
import { useCRMStore } from '@/store/crmStore';
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  Clock,
  TrendingUp,
  Package
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { getDashboardStats, loadData } = useCRMStore();
  const [stats, setStats] = useState(useCRMStore.getState().getDashboardStats());

  useEffect(() => {
    loadData();
    setStats(getDashboardStats());
  }, [loadData, getDashboardStats]);

  const statCards = [
    {
      title: 'Total Clientes',
      value: stats.totalCustomers,
      icon: Users,
      color: 'bg-blue-500',
      href: '/admin/clientes',
    },
    {
      title: 'Total Pedidos',
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: 'bg-green-500',
      href: '/admin/pedidos',
    },
    {
      title: 'Ingresos Totales',
      value: `$${stats.totalRevenue.toLocaleString('es-CO')}`,
      icon: DollarSign,
      color: 'bg-purple-500',
      href: '/admin/reportes',
    },
    {
      title: 'Pedidos Pendientes',
      value: stats.pendingOrders,
      icon: Clock,
      color: 'bg-orange-500',
      href: '/admin/pedidos?status=pending',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Resumen general de tu negocio
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.title}
              href={stat.href}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Productos Más Vendidos</h2>
            <Package className="h-5 w-5 text-gray-400" />
          </div>
          {stats.topProducts.length > 0 ? (
            <div className="space-y-4">
              {stats.topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500">
                      {product.sales} unidades vendidas
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ${product.revenue.toLocaleString('es-CO')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No hay datos de ventas aún
            </p>
          )}
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Pedidos Recientes</h2>
            <ShoppingBag className="h-5 w-5 text-gray-400" />
          </div>
          {stats.recentOrders.length > 0 ? (
            <div className="space-y-4">
              {stats.recentOrders.map((order) => (
                <Link
                  key={order.id}
                  href={`/admin/pedidos/${order.id}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{order.customerName}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString('es-CO')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        ${order.total.toLocaleString('es-CO')}
                      </p>
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No hay pedidos recientes
            </p>
          )}
        </div>
      </div>

      {/* Average Order Value */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Valor Promedio de Pedido</h2>
            <p className="text-3xl font-bold text-green-600">
              ${stats.averageOrderValue.toLocaleString('es-CO', { maximumFractionDigits: 0 })}
            </p>
          </div>
          <TrendingUp className="h-12 w-12 text-green-500" />
        </div>
      </div>
    </div>
  );
}
