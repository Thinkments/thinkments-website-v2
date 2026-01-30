import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ChevronRight, AlertTriangle, FileText, Table, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { toast } from 'sonner@2.0.3';

export default function BulkPageGenerator() {
  const [step, setStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState('location');

  const templates = [
    { id: 'location', name: 'Location Page', description: 'For city/region-specific pages' },
    { id: 'service', name: 'Service Page', description: 'For service-specific pages' },
  ];

  const sampleData = [
    { city: 'Decatur', state: 'TX', phone: '(940) 539-3074', address: '301 S Washburn St' },
    { city: 'Denton', state: 'TX', phone: '(940) 539-3074', address: '123 Main St' },
    { city: 'Fort Worth', state: 'TX', phone: '(940) 539-3074', address: '456 Oak Ave' },
    { city: 'Dallas', state: 'TX', phone: '(940) 539-3074', address: '789 Commerce St' },
  ];

  const steps = [
    { number: 1, title: 'Template Selection', icon: FileText },
    { number: 2, title: 'Variable Setup', icon: Table },
    { number: 3, title: 'Data Input', icon: Table },
    { number: 4, title: 'Review & Generate', icon: Eye },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1E3A5F]">Bulk Page Generator</h1>
        <p className="text-gray-600 mt-1">Create multiple pages at once from a template</p>
      </div>

      {/* Progress Steps */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((s, index) => (
              <React.Fragment key={s.number}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      s.number === step
                        ? 'bg-[#00B4D8] text-white'
                        : s.number < step
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {s.number < step ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <s.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span className="text-sm mt-2 text-center">{s.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${s.number < step ? 'bg-green-500' : 'bg-gray-200'}`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card className="border-0 shadow-md">
        <CardContent className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#1E3A5F]">Choose Base Template</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                  <div
                    key={template.id}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedTemplate === template.id
                        ? 'border-[#00B4D8] bg-[#00B4D8]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTemplate(template.id)}
                  >
                    <h3 className="font-semibold text-[#1E3A5F] mb-2">{template.name}</h3>
                    <p className="text-sm text-gray-600">{template.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#1E3A5F]">Define Variables</h2>
              <div className="space-y-4">
                {['{city}', '{state}', '{phone}', '{address}'].map((variable) => (
                  <div key={variable} className="flex items-center space-x-4">
                    <Badge variant="outline" className="text-[#00B4D8]">
                      {variable}
                    </Badge>
                    <span className="text-sm text-gray-600">Will be replaced in template</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Preview:</strong>
                </p>
                <p className="text-sm">
                  Digital Marketing Services in {'<city>'}, {'<state>'}
                </p>
                <p className="text-sm">
                  Call us at {'<phone>'} or visit us at {'<address>'}
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#1E3A5F]">Input Data</h2>
                <Button variant="outline" size="sm">
                  Import from CSV
                </Button>
              </div>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-[#1E3A5F] text-white">
                    <tr>
                      <th className="p-3 text-left">City</th>
                      <th className="p-3 text-left">State</th>
                      <th className="p-3 text-left">Phone</th>
                      <th className="p-3 text-left">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sampleData.map((row, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-3">
                          <Input value={row.city} className="h-8" />
                        </td>
                        <td className="p-3">
                          <Input value={row.state} className="h-8" />
                        </td>
                        <td className="p-3">
                          <Input value={row.phone} className="h-8" />
                        </td>
                        <td className="p-3">
                          <Input value={row.address} className="h-8" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button variant="outline" className="w-full">
                + Add Row
              </Button>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#1E3A5F]">Review & Generate</h2>
              <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm text-yellow-800">
                    Duplicate content warning: Ensure each page has unique content
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {sampleData.map((data, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 rounded border-gray-300 text-[#00B4D8] focus:ring-[#00B4D8]"
                      />
                      <div>
                        <p className="font-medium text-[#1E3A5F]">
                          Digital Marketing {data.city}, {data.state}
                        </p>
                        <p className="text-sm text-gray-500">
                          /digital-marketing-{data.city.toLowerCase()}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#00B4D8]">
                      Preview
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-6 border-t">
                <p className="text-sm text-gray-600">{sampleData.length} pages will be created</p>
                <Button className="bg-[#00B4D8]" onClick={() => toast.success('Pages generated!')}>
                  Generate All Pages
                </Button>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 mt-6 border-t">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button
              className="bg-[#00B4D8]"
              onClick={() => setStep(Math.min(4, step + 1))}
              disabled={step === 4}
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
