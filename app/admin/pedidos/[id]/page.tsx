'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCRMStore } from '@/store/crmStore';
import { Order } from '@/types/crm';
import { ArrowLeft, Edit, Package } from 'lucide-react';
import Link from 'next/link';

export default function PedidoDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { getOrder, updateOrder, loadData } = useCRMStore();
  const [order, setOrder] = useState<Order | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadData();
    const foundOrder = getOrder(params.id);
    if (!foundOrder) {
      router.push('/admin/pedidos');
      return;
    }
    setOrder(foundOrder);
  }, [params.id, getOrder, router, loadData]);

  if (!order) {
    return <div className="text-center py-12">Cargando...</div>;
  }

  const handleStatusChange = (field: 'status' | 'paymentStatus', value: string) => {
    if (order) {
      updateOrder(order.id, { [field]: value });
      setOrder({ ...order, [field]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/pedidos"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Pedido #{order.id.slice(-8)}
            </h1>
            <p className="text-gray-600 mt-1">
              Creado el {new Date(order.createdAt).toLocaleString('es-CO')}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Edit className="h-5 w-5" />
          <span>{isEditing ? 'Cancelar' : 'Editar'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Customer Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Información del Cliente</h2>
            <div className="space-y-2">
              <p><span className="font-medium">Nombre:</span> {order.customerName}</p>
              <p><span className="font-medium">Email:</span> {order.customerEmail}</p>
              <p><span className="font-medium">Dirección de envío:</span> {order.shippingAddress}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Productos
            </h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.productName}</p>
                    <p className="text-sm text-gray-500">
                      Cantidad: {item.quantity} × ${item.price.toLocaleString('es-CO')}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    ${item.subtotal.toLocaleString('es-CO')}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-green-600">
                  ${order.total.toLocaleString('es-CO')}
                </span>
              </div>
            </div>
          </div>

          {order.notes && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Notas</h2>
              <p className="text-gray-600">{order.notes}</p>
            </div>
          )}
        </div>

        {/* Status Panel */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Estado del Pedido</h2>
            {isEditing ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado
                  </label>
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange('status', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="pending">Pendiente</option>
                    <option value="processing">En proceso</option>
                    <option value="shipped">Enviado</option>
                    <option value="delivered">Entregado</option>
                    <option value="cancelled">Cancelado</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estado de Pago
                  </label>
                  <select
                    value={order.paymentStatus}
                    onChange={(e) => handleStatusChange('paymentStatus', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="pending">Pendiente</option>
                    <option value="paid">Pagado</option>
                    <option value="refunded">Reembolsado</option>
                  </select>
                </div>
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Guardar Cambios
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estado</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">{order.status}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Estado de Pago</p>
                  <p className="text-lg font-semibold text-gray-900 capitalize">{order.paymentStatus}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Última actualización</p>
                  <p className="text-sm text-gray-900">
                    {new Date(order.updatedAt).toLocaleString('es-CO')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
