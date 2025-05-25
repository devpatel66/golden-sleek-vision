
interface ParsedResumeData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export const parseResumeText = (text: string): ParsedResumeData => {
  const data: ParsedResumeData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  // Extract email using regex
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const emailMatch = text.match(emailRegex);
  if (emailMatch) {
    data.email = emailMatch[0];
  }

  // Extract phone number using regex
  const phoneRegex = /(\+?1?[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/;
  const phoneMatch = text.match(phoneRegex);
  if (phoneMatch) {
    data.phone = phoneMatch[0];
  }

  // Extract name (assuming first line or first few words contain the name)
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  if (lines.length > 0) {
    const firstLine = lines[0].trim();
    const words = firstLine.split(/\s+/);
    
    // Simple heuristic: if first line has 2-3 words and no special characters, it's likely a name
    if (words.length >= 2 && words.length <= 3 && !/[^a-zA-Z\s]/.test(firstLine)) {
      data.firstName = words[0];
      data.lastName = words[words.length - 1];
    } else {
      // Try to find name in first few lines
      for (let i = 0; i < Math.min(3, lines.length); i++) {
        const line = lines[i].trim();
        const lineWords = line.split(/\s+/);
        if (lineWords.length === 2 && !/[^a-zA-Z\s]/.test(line) && line.length < 50) {
          data.firstName = lineWords[0];
          data.lastName = lineWords[1];
          break;
        }
      }
    }
  }

  return data;
};

export const parseResumeFile = async (file: File): Promise<ParsedResumeData> => {
  const defaultData: ParsedResumeData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  try {
    if (file.type === 'application/pdf') {
      // For PDF files, we'll use a simple text extraction approach
      // In a real application, you'd want to use a proper PDF parsing library
      const text = await extractTextFromPDF(file);
      return parseResumeText(text);
    } else if (file.type.includes('word') || file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
      // For Word documents, we'll provide a basic implementation
      // In production, you'd want to use a proper Word document parser
      return defaultData;
    } else {
      // For other file types, try to read as text
      const text = await file.text();
      return parseResumeText(text);
    }
  } catch (error) {
    console.error('Error parsing resume:', error);
    return defaultData;
  }
};

const extractTextFromPDF = async (file: File): Promise<string> => {
  // Simple PDF text extraction using FileReader
  // Note: This is a basic implementation and may not work with all PDFs
  // For production use, consider using pdf-parse or pdf.js
  
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = reader.result as string;
        // Very basic PDF text extraction - look for readable text patterns
        const cleanText = text.replace(/[^\x20-\x7E\n\r]/g, ' ').replace(/\s+/g, ' ').trim();
        resolve(cleanText);
      } catch (error) {
        console.error('Error extracting PDF text:', error);
        resolve('');
      }
    };
    reader.onerror = () => resolve('');
    reader.readAsText(file);
  });
};
